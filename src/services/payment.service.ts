export interface PaymentData {
  amount: number
  email: string
  phone: string
  name: string
  currency: string
  orderId: string
  description: string
  paymentMethodId: string
}

export const paymentService = {
    initialiteFlutterwave : async (data: PaymentData) => {
        const response = await fetch('/api/payment/flutterwave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    },
    initializeStripe : async (data: PaymentData) => {
        const response = await fetch('/api/payment/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    },
    initializePayPal : async (data: PaymentData) => {
        const response = await fetch('/api/payment/paypal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }   
}