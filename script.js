document.getElementById("payBtn").onclick = async function () {

    const response = await fetch("/create-payment", {

        method: "POST"

    });

    const order = await response.json();

    console.log(order);

    const options = {

        key: "rzp_test_SvDPqkqDoiHqyt",

        amount: order.amount,

        currency: order.currency,

        order_id: order.id,

        name: "Khushi Demo Store",

        description: "Test Payment",

       handler: function (response) {

    console.log(response);

    alert("Payment Successful");

}

    };

    const rzp = new Razorpay(options);

    rzp.open();

};