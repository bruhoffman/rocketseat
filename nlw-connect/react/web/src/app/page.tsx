import { ArrowRight, Copy } from "lucide-react"
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>


    </main>
  )
}


{/* Exemplo do comportamento do botão 
  <main>
  <div className="text-white">Hello world!</div>

  <h1 className="tex-4xl text-semibold font-heading">Hello, Bruno</h1>

  <Button text="NLW" />
  <Button text="Bruno" />
  <Button />
</main> */}