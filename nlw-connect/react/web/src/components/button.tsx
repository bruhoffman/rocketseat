import { ComponentProps, ReactNode } from "react"

//interface ButtonProps { //criei uma interface para tipar o props que o botão está recebendo.
//    text?: string       // o ? é para informar que o texto é opcional.
//}

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode
}

export function Button(props: ButtonProps) {
    return (
        <button
            className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            {...props}
        />
    )
}