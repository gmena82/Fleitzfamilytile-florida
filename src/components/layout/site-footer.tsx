import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { navigation } from "@/config/navigation";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo width={120} height={120} />
            <p className="text-sm text-gray-500">
              Providing high-quality tile installation services throughout Florida.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-900">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Fleitz Family Tile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
