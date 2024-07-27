"use client"

import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "./get-stripe"
export default function ElementsProvider({ children }) {
    "use client"
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    )
}