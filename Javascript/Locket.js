const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "Hello World";
var win98plus = {
      auto_resume_date: null,
      display_name: "locket_1600_1y",
      is_sandbox: true,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      management_url: "https://apps.apple.com/account/subscriptions",
      period_type: "normal",
      price: {
          "amount": 399000.0,
          "currency": "VND"
      },
      expires_date: "2095-05-05T05:05:05Z",
      grace_period_expires_date: null,
      refunded_at: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2026-07-15T05:05:05Z",
      purchase_date: "2026-07-15T05:05:05Z",
      store: "app_store",
      store_transaction_id: "2000001108724193",
  },
  locketGold = {
      grace_period_expires_date: null,
      purchase_date: "2026-07-15T05:05:05Z",
      product_identifier: "locket_1600_1y",
      expires_date: "2095-05-05T05:05:05Z"
  };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  s ? (locketGold.product_identifier = s, obj.subscriber.subscriptions[s] = win98plus) : obj.subscriber.subscriptions["locket_1600_1y"] = win98plus, obj.subscriber.entitlements[e] = locketGold
} else obj.subscriber.subscriptions["locket_1600_1y"] = win98plus, obj.subscriber.entitlements.pro = locketGold;
$done({
  body: JSON.stringify(obj)
});
