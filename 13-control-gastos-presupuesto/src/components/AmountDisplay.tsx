import { formatData } from "../helpers"

type AmountDisplayProps = {
    label: string,
    amount: number
}

export const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
    return (
        <p className="font-bold text-2xl">
            {label}: {''}
            <span className="font-normal">{formatData(amount)}</span>
        </p>
    )
}
