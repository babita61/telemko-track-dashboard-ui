
import React from 'react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface RightDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const RightDrawer: React.FC<RightDrawerProps> = ({
  open,
  onClose,
  title,
  description,
  children
}) => {
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="fixed right-0 top-0 bottom-0 mt-0 h-full rounded-none w-full max-w-md transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          <DrawerHeader className="border-b">
            <div className="flex justify-between items-center">
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
            </div>
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
          <DrawerFooter className="border-t">
            <DrawerClose asChild>
              <Button variant="outline" onClick={onClose}>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default RightDrawer;
