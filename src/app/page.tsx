import { Button } from "@/components/Button/Default/Button";
import { ArrowLeft } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div>
      <Button
        text="Button"
        variant="tinted"
        color="danger"
        disabled
        icon={<ArrowLeft />}
        iconPosition="start"
        onlyIcon
      />
    </div>
  );
}
