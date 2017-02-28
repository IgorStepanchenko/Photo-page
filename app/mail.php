<?php

$recepient = "istepanchenko7@gmail.com";
$sitename = "Photo page";

// \nПочта: $email \nСообщение: $textaria
$name = trim($_POST["UserName"]);
$phone = trim($_POST["PhoneNumber"]);
$company = trim($_POST["CompanyName"]);
$message = "Имя: $name \nТелефон: $phone \nКомпания: $company";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");