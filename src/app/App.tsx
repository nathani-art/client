import { AppSidebar } from "@/components/app-sidebar";
import { NavActions } from "@/components/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function MainPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col h-screen">
          <header className="flex h-14 shrink-0 items-center gap-2">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1">
                      Project Management & Task Tracking
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="ml-auto px-3">
              <NavActions />
            </div>
          </header>
          <div className="flex-1 flex-wrap px-4 py-10 overflow-y-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx- h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="h-[400px] rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx- h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-60 w-full max-w-3xl rounded-xl bg-muted/50" />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
