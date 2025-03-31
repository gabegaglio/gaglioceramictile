import React from "react";
import { Button } from "./ui/button";

function TestShadcn() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Shadcn UI Test</h1>
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="lg">Large Button</Button>
        <Button size="icon">
          <span className="text-lg">+</span>
        </Button>
      </div>
    </div>
  );
}

export default TestShadcn;
