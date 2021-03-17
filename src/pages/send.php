<!DOCTYPE html>
<html><body>
testestet
</body>
</html>

<?php
	$apiURL = "https://www.followize.com.br/api/v2/Leads/";
	$conversionGoal =  "API v2.0";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$hubUtmz = $_POST['hubUtmz'];

	$data["clientKey"] = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
	$data["teamKey"] = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
	$data["conversionGoal"] = $conversionGoal;

	$data["name"] = $name;
	$data["email"] = $email;
	$data["message"] = $message;
	$data["hubUtmz"] = $hubUtmz;

	$data = json_encode($data);

	$curl = curl_init();
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_URL, $apiURL);
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	$result = json_decode(curl_exec($curl), true);
	curl_close($curl);

	if ($result['success'] == 1){
		echo "Lead inserido com sucesso.";
	} else {
		echo "Houve um erro na inserção do lead.";
	}
?>