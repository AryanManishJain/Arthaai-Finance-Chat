<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"), true);
$message = strtolower(trim($data["message"] ?? ""));
$mode = $data["mode"] ?? "general";
$finance_keywords = [
"finance","money","budget","save","saving","invest",
"stock","bond","mutual fund","etf","sip","loan",
"emi","credit","debt","startup","burn","runway",
"cash flow","tax","income","expense","profit","revenue"
];
function isFinancePrompt($msg,$keywords){
foreach($keywords as $word){
if(strpos($msg,$word)!==false){
return true;
}
}
return false;
}
if(!isFinancePrompt($message,$finance_keywords)){
echo json_encode([
"reply"=>"I’m a finance-only assistant. Ask about budgeting, investing, loans, or startups."
]);
exit;
}
$reply = "Mode: $mode.\n\n";
$reply .= "Next steps:\n";
$reply .= "1) Define your financial goal.\n";
$reply .= "2) Share your income and expenses.\n";
$reply .= "3) Choose a risk level.\n\n";
$reply .= "Starter tip: Track monthly cash flow and automate savings.";
echo json_encode(["reply"=>$reply]);
?>
