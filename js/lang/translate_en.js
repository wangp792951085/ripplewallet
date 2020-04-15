/* exported translate_en */
var translate_en = {
  header_wellcome : 'Welcome to Ripple, a global value exchange',
  login_desc : 'You can only use a secret key to access an existing account. This is because the desktop client stores your login information locally on your computer, so your account is as safe as the security of your personal computer.',
  open_wallet: 'Open wallet',
  create_wallet: 'Create wallet',
  open_account : 'Open account',
  open_temp_act: 'Temporary Wallet',
  select_file : 'Select account file',
  create_new_account : 'Create new account',
  create_new_account_info : 'Wallet will create a local file for your secret that will be encrypted with password of your choice. Encrypted file is not recommended way to access your wallet. Please consider a hardware wallet.',
  account_password : 'Account password',
  open_existed_account : 'Open existing account',
  create_blank : 'Create an empty account',
  create_by_secret : 'Import existing secret key',
  encrypt_new_file : 'Encrypt your new account file',
  wallet_file : 'Wallet file',
  password : 'Password',
  pwd_weak : 'Your password is weak. It is not a mix of letters, numbers and symbols.',
  password_confirm : 'Confirm password',
  pwd_not_match : 'Passwords do not match',
  encrypt_account : 'Encrypt account',
  create_secret : 'Create account with secret key',
  enter_secret : 'Enter your secret key',
  invalid_account: 'Account is invalid',
  invalid_secret : 'Secret is invalid',
  important : 'Important:',
  security_notice : 'The secret key below gives access to your money in the unlikely case that you lose your password. With this secret key alone anyone can retrieve your money. So please store it somewhere PRIVATE AND SAFE.',
  show_password : 'Show password',
  hide_password : 'Hide password',
  public_address : 'Public address',
  secret_key : 'Secret key and QRCode:',
  show_secret: 'Show secret key',
  hide_secret: 'Hide secret key',
  are_you_sure_secret: 'Are you in a safe place where no person or camera can see your screen?',
  save_safe: 'Have you saved your secret key somewhere safe?',
  yes_save: 'Yes, I saved my secret key',
  cancel : 'Cancel',
  back   : 'Back',
  confirm: 'Confirm',
  stop_countdown: 'Stop countdown',
  
  /** Balance & Trust **/
  overview: 'Overview',
  balance : 'Balance',
  reserve   : 'Reserve:',
  total : 'Total',
  trust : 'Trust',
  asset : 'Asset',
  no_balance  : 'Account not found. (Unfunded or network error)',
  trust_limit : 'Trust Limit',
  add_trust : 'Add trust from known gateways',
  trust_src : 'This is a list of gateways from the Ripple community.',
  trust_note: 'Note: We do NOT endorse any of these gateways.',
  trust_remove : 'Remove trust line',
  trust_noremove_desc : 'No need to remove the trust',
  trust_removeing : 'Removing...',
  trust_add : 'Create trust line for',
  fed_add : 'Add trust via federation',
  fed_desc: 'You can add trust using the federation URL.',
  fed_url : 'Federation URL',
  fed_unable : 'Unable to find currencies for',
  fed_loading: 'Loading currencies for',
  manual_add : 'Manually add trust',
  manual_desc: 'You can add trust manually if you know the account ID and asset code',
  issuer_invalid : 'Asset issuer account ID must be a valid account ID',
  trust_granted  : 'Trust is granted!',

  /** send **/
  send : 'Send',
  send_money : 'Send money',
  name_or_address : 'Contact name or Ripple address',
  send_note : 'Note: The target address must also trust the asset you are sending.',
  recipient : 'Recipient',
  dest_tag  : 'Destination tag',
  tag_need  : 'Recipient requires a destination tag to be specified for the transaction. If you don\'t know the destination tag, please contact them before doing a transaction.',
  disallow_xrp: 'Recipient does not allow {{code}} payments. Are you sure you want to send {{code}} anyway?',
  will_receive: 'Recipient will receive',
  invalid_address : 'Recipient should be either a name from your contact list or Ripple address.',
  invalid_amount : 'Not a valid amount.',
  invalid_domain : 'is unavailable',
  account_loading: 'Loading account for',
  sending_to   : 'Sending to',
  send_done    : 'Asset successfully sent.',
  not_funded   : 'Not funded. To create this account, send it at least 20 {{name}}s ({{code}}).',
  no_send_path : 'Unable to find a path between you and the destination account.',
  you_sending : 'You are sending {{code}} to',

  contacts : 'Contacts',
  contact  : 'Contact',
  address  : 'Address',
  add_contact : 'Add contact',
  edit        : 'edit',
  leave_blank : 'Leave blank if not applicable',
  Delete      : 'Delete',
  are_you_sure: 'Are you sure?',
  no_contact  : "You don't have any contacts yet. Click on 'Add contact' button in the top right corner to add a new contact.",
  error_need_contact : 'Please enter a contact.',
  error_same_contact : 'This contact already exists.',
  error_need_address : 'Please enter an address.',
  error_invalid_address : 'Not a valid address.',
  error_invalid_tag     : 'Invalid destination tag',
  error_already_name    : 'You already have a contact with the same name.',

  /** Convert **/
  convert       : 'Convert',
  convert_title : 'Convert one currency into another',
  convert_input : 'Please enter the conversion details.',
  convert_nopath: 'No acceptable path. Please make sure your account has enough funds / trustline limit.',
  receive       : 'Receive',
  calculating   : 'Calculating...',
  path_updated  : 'Paths last updated',
  seconds_ago   : 'second(s) ago',
  converting    : 'You are converting',
  converting_to : 'to',
  pay_most      : 'You will pay at most',
  submitting    : 'Sending transaction to Ripple network',
  submitted     : 'Your transaction has been submitted.',
  act_will_upd  : 'Your account will update once the transaction has cleared.',
  back_convert  : 'Do another conversion',
  go_balance    : 'Back to balance',
  
  /** History **/
  history: 'History',
  you         : 'You',
  date        : 'Date',
  account_id  : 'Account ID',
  loading     : 'Loading...',
  load_more   : 'Load more',
  no_more     : 'No more transactions left',

  you_convert: 'You requested to convert',
  you_convert_to: 'to',
  you_sold: 'You sold',
  you_sold_for: 'for', 
  you_bought: 'You bought',
  you_bought_for: 'for', 
  order_filled: '. This order has been filled.',
  rest_cancel: '. The rest of your order has been cancelled due to lack of funds.',
  order_has: '. This order has',
  remaining: 'remaining.',
  you_sell: 'You created an order to sell',
  you_sell_for: 'for',
  you_buy: 'You created an order to buy',
  you_buy_for: 'for',
  you_cancel: 'You cancelled an order accepting',
  you_cancel_for: 'for',
  you_trust: 'You now trust',
  you_trust_for: 'for',
  trust_you: 'now trusts you for',
  you_sent: 'You sent',
  you_sent_to: 'to',
  sent_you: 'sent you',
  order_cancel: 'Order (',
  order_cancel_for: 'for',
  order_cancel_due: ') has been cancelled due to lack of funds.',
  accountset: 'Account details have been changed',
  rippling: 'Rippling',
  failedtx: 'Failed transaction',
  tx_tag: '. (Tag',
  another_payment: 'Send another payment',
  request_quote: 'Requesting quote',
  
  choose : 'Choose',
  example : 'example',
  refresh : 'Refresh',
  asset_code : 'Asset Code',
  issuer_id : 'Issuer Account ID',
  amount : 'Amount',
  optional : 'Optional',
  required : 'Required',

  trade : 'Trade',
  normal: 'Normal',
  sent  : 'Sent',
  received : 'Received',
  created : 'Created',
  offer : 'Offer',
  offer_cancel    : 'Cancel',
  offer_canceling : 'Canceling...',
  type  : 'Type',
  price : 'Price',
  action: 'Action',
  buy   : 'Buy',
  sell  : 'Sell',
  orderbook : 'Orderbook',
  buy_offers : 'Buy Offers',
  sell_offers: 'Sell offers',
  no_bids : 'There are currently no bids for this pair.',
  no_asks : 'There are currently no asks for this pair.',
  sum   : 'Sum',
  size  : 'Size',
  ask_price : 'Ask Price',
  bid_price : 'Bid Price',
  manager_offer : 'Manage offers',
  your_buy_offers  : 'Your buy offers',
  your_sell_offers : 'Your sell offers',
  no_offers : 'You haven\'t placed any orders.',
  you_have      : 'You have',
  order_amount  : 'Amount',
  price_of_each : 'Price of Each',
  order_value   : 'Order Value',
  offer_success : 'Offer successfully created',
  trade_pick : 'Choose asset to trade',
  as_base    : 'As base asset',
  as_counter : 'As counter asset',
  base_asset    : 'Base asset',
  counter_asset : 'Counter asset',
  pick_book  : 'To see other orderbooks, choose',
  trade_pair : 'your trade pair',
  pick_trade : 'To trade, go back to',
  trade_page : 'trade page',
  advanced   : 'Advanced',
  show_all   : 'Show all offers',
  buying     : 'Buying',
  selling    : 'Selling',

  /** Setting & security **/
  settings : 'Settings',
  network  : 'Network',
  proxy    : 'Proxy',
  selected_net    : 'Selected Ripple Network',
  switch_net      : 'Switch Ripple Network',
  switch_net_desc : 'You can switch between different Ripple Network. The testnets are for, well, testing - they are also occasionally reset, so don’t get attached to any balances or accounts that you have on it.',
  public_net : 'Public Network',
  test_net   : 'Test Network',
  other_net  : 'User defined',
  'Ripple Public Network' : 'Ripple Public Network',
  'Ripple Test Network' : 'Ripple Test Network',
  'User defined' : 'User defined',
  public_url : 'Public Net URL',
  test_url   : 'Test Net URL',
  other_url  : 'Network URL',
  passphrase : 'Passphrase or id',
  coin_ticket: 'Native asset code',
  max_fee     : 'Max Fee',
  max_fee_desc: 'Maximum fee to use with transactions.',
  timeout      : 'Network Timeout',
  timeout_desc : 'Timeout in seconds before considering a request to have failed.',
  fed_protocol: 'Federation Protocol',
  fed_ripple  : 'Ripple Service',
  fed_ripple_desc : 'When you enter a Ripple address, it will use below domain to parse.',
  fed_bitcoin  : 'Bitcoin Service',
  fed_bitcoin_desc : 'When you enter a Bitcoin address, it will use below domain to parse.',
  save     : 'Save',
  security : 'Security',

  home_domain : 'Home Domain',
  domain_desc : 'A domain name that can optionally be added to the account. Clients can look up more details from this domain.',
  domain_done : 'Home Domain was set.',
  manage_data : 'Manage Data',
  back           : 'Back',

  /** Deposit & withdrawl **/
  service : 'Service',
  deposit_withdraw : 'Deposit/Withdraw',
  deposit  : 'Deposit',
  withdraw : 'Withdraw',
  dw_coin  : 'Depositing or withdrawing coins',
  dw_desc_line1 : 'If you want to deposit or withdraw funds, either in fiat or from other blockchains, you may use an gateway service to do so.',
  dw_desc_line2 : 'You\'ll find a selection of service providers in the tabs below. Start by choosing a provider. ',
  gateway   : 'Gateway',
  gateways  : 'Gateways',
  no_trust : 'Please create the trust line first.',
  alipay    : 'Alipay',
  bank_card : 'Bank',
  fill_form : 'Please fill the form correctly.',
  analyzing : 'Analyzing ...',
  will_recv : 'Recipient will receive',
  can_send  : 'You can send',

  ripple : 'Ripple',
  ripple_desktop_client : 'Foxlet Wallet',
  wallet_notice1 : 'Your money and wallet are protected digitally through encryption algorithms that can be unlocked only with your personal keys.',
  wallet_notice2 : 'No one else has them, so don\'t lose them! Please backup your secret carefully.',
  wallet_notice3 : 'Never share them!',
  app_open_source : 'This app is open source now.',
  github_feedback : 'You can submit an issue on github if there are any problems.',
  qq_feedback     : 'You can also find us in QQ group 703611153.',
  trade_volume : 'Trade Volume',
  wallet : 'Wallet',
  version: 'Version',
  logout : 'Logout',
  new_version_available: 'New version available',

  /** Error **/
  NotFoundError : 'The resource was not found. You must have at least 1 {{name}} in your account for it to be activated! Each trust line or offer requires a 0.5 {{name}}  reserve in addition. To make things easy, send at least 3 {{name}}s to the account.',
  NotConnectedError : 'Not connected, please retry later.',
  NoRippleTXT: 'Ripple.txt was not found.',
  NoFederationUrl: 'Federation service url was not provided.',
  'Invalid Email' : 'Invalid Email address.'
}
