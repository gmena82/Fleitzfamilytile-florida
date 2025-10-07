"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { cloneElement, isValidElement } from "react";
import type { ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SheetContext = createContext<SheetContextValue | null>(null);

interface SheetProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === "boolean";
  const resolvedOpen = isControlled ? open : internalOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setInternalOpen(value);
      }
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  const value = useMemo(
    () => ({
      open: resolvedOpen,
      setOpen
    }),
    [resolvedOpen, setOpen]
  );

  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
}

interface SheetTriggerProps {
  asChild?: boolean;
  children: ReactNode;
}

export function SheetTrigger({ asChild = false, children }: SheetTriggerProps) {
  const context = useSheetContext("SheetTrigger");

  if (asChild && isValidElement(children)) {
    const originalOnClick = children.props.onClick;
    return cloneElement(children, {
      onClick: (event: MouseEvent<HTMLButtonElement>) => {
        if (typeof originalOnClick === "function") {
          originalOnClick(event);
        }
        if (!event.defaultPrevented) {
          context.setOpen(true);
        }
      }
    });
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!event.defaultPrevented) {
      context.setOpen(true);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

interface SheetContentProps {
  children: ReactNode;
  side?: "left" | "right";
  className?: string;
}

export function SheetContent({
  children,
  side = "right",
  className
}: SheetContentProps) {
  const context = useSheetContext("SheetContent");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!context.open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        context.setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [context]);

  if (!mounted || !context.open) {
    return null;
  }

  const content = (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-slate-900/40"
        aria-hidden="true"
        onClick={() => context.setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative ml-auto flex h-full w-80 max-w-full flex-col bg-white p-6 shadow-xl",
          side === "left" ? "ml-0 mr-auto" : "ml-auto",
          className
        )}
      >
        {children}
      </aside>
    </div>
  );

  if (typeof document === "undefined") {
    return content;
  }

  return createPortal(content, document.body);
}

interface SheetCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactNode;
}

export function SheetClose({ asChild = false, children, ...props }: SheetCloseProps) {
  const context = useSheetContext("SheetClose");

  if (asChild && isValidElement(children)) {
    const originalOnClick = children.props.onClick;
    return cloneElement(children, {
      onClick: (event: MouseEvent<HTMLButtonElement>) => {
        if (typeof originalOnClick === "function") {
          originalOnClick(event);
        }
        if (!event.defaultPrevented) {
          context.setOpen(false);
        }
      }
    });
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);
    if (!event.defaultPrevented) {
      context.setOpen(false);
    }
  };

  return (
    <button type="button" {...props} onClick={handleClick}>
      {children}
    </button>
  );
}

function useSheetContext(component: string): SheetContextValue {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error(`${component} must be used within a Sheet`);
  }
  return context;
}
