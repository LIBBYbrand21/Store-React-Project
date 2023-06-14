import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPal() {
    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "10.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    const name = details.payer.name.given_name;
                    alert(`Transaction completed by ${name}`);
                }}
            />
        </PayPalScriptProvider>
    )
}

