<?php
    $name = $_POST['name'];
    $date = $_POST['date'];
    $email = $_POST['mail'];
    $partyNo = $_POST['party'];
    $from = 'Fra hjemmesiden'; 
    $to = 'hdh@hjalhan.dk'; 
    $subject = 'Reservation inquiry';
			
    $body = "From: $name\n Date: $date\n Email: $email\n PartyNo: $partyNo\n";
				
    mail ($to, $subject, $body, $from);
echo "<script>window.location.href = 'http://hjaltedaniel.io/frontend/#reservations';</script>"

?>
