import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants=cva("button",{variants:{variant:{default:"button-dark",light:"button-light",plain:"button-plain"},size:{default:"",icon:"button-icon"}},defaultVariants:{variant:"default",size:"default"}});
type Props=React.ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof variants>&{asChild?:boolean};
export const Button=React.forwardRef<HTMLButtonElement,Props>(({asChild=false,className,variant,size,...props},ref)=>{const Comp=asChild?Slot:"button";return <Comp className={cn(variants({variant,size}),className)} ref={ref} {...props}/>;});
Button.displayName="Button";
