"use client"

const CURRENCIES = [
  "CNY", "USD", "EUR", "GBP", "CZK", "DKK", "HUF", "NOK", "SEK", "CHF",
  "PLN", "RON", "KES", "ZAR", "HUK", "CAD", "AUD", "NZD", "TRY", "AED",
  "SAR", "JPY", "SGD", "RUB", "TJS", "USDT",
]

export function RechargeApplyForm() {
  return (
    <div className="xport-recharge-form">
      <div className="xport-form-row">
        <label><i>*</i>水单号:</label>
        <input placeholder="请输入" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>收款渠道:</label>
        <input placeholder="请输入" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>收款金额:</label>
        <div className="xport-input-prepend">
          <select defaultValue="RUB">
            {CURRENCIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input placeholder="请输入" />
        </div>
      </div>
      <div className="xport-form-row">
        <label><i>*</i>收款日汇率:</label>
        <input placeholder="请输入" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>收款换算金额:</label>
        <div className="xport-input-append">
          <input placeholder="请输入" />
          <span>CNY</span>
        </div>
      </div>
      <div className="xport-form-row">
        <label><i>*</i>客户代码:</label>
        <input placeholder="请输入" />
      </div>
      <div className="xport-form-row">
        <label><i>*</i>付款金额:</label>
        <div className="xport-input-append">
          <input placeholder="请输入" />
          <span>CNY</span>
        </div>
      </div>
      <div className="xport-form-row">
        <label><i>*</i>收款附件:</label>
        <div>
          <label className="xport-upload-box">
            +
            <input type="file" accept=".jpg,.jpeg,.png,.pdf" multiple hidden />
          </label>
          <div className="xport-upload-hint">支持jpg、png、pdf格式，单个附件不超过5M，最多5个</div>
        </div>
      </div>
      <div className="xport-form-row">
        <label>收款说明:</label>
        <textarea rows={3} placeholder="请输入 收款说明" />
      </div>
    </div>
  )
}
