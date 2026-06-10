import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Role } from "@/types/domain";

const roles: Role[] = ["SME", "Funder", "Auditor"];

export function RoleSwitcher() {
  return (
    <Tabs defaultValue="SME" className="items-center">
      <TabsList className="h-10 rounded-lg border bg-white p-0 shadow-sm">
        {roles.map((role) => (
          <TabsTrigger
            key={role}
            value={role}
            className="h-10 min-w-32 rounded-md px-8 text-sm font-semibold data-active:bg-[#061b49] data-active:text-white"
          >
            {role}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
