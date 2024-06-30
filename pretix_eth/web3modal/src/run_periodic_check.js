import {
    GlobalPretixEthState,
} from "./interface.js";
import { runPeriodicCheck } from "./periodic_check.js";

window.addEventListener('load', async () => { // attempt to begin running a listener to monitor for an existing unconfirmed payment to become confirmed
    const didUserSubmitAPaymentTransactionAlready = GlobalPretixEthState.elements.submittedTransactionHash !== null; // WARNING here we rely on this html element being defined if and only if the user already submitted a payment transaction for this order
    if (didUserSubmitAPaymentTransactionAlready) {
        await runPeriodicCheck();
    }
});
