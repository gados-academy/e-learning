import { Button } from "@/components/Button/Default/Button";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <Button
        text="Button"
        variant="tinted"
        color="danger"
        disabled
        iconPosition="start"
        onlyIcon
      />
    </div>
  );
}
