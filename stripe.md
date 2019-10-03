* User clicks "Purchase"
* Client sends order to server, it creates order and payment intent. Marked as "not paid yet"
* Server returns client secret
* Client sends payment to Stripe servers
* User finalizes the payment authentication and is redirected to order page which will poll the order
* Stripe server sends webhook to backend and payment is finalized
* Order with changed status is returned and we render the ui "all done!"


