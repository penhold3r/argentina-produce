<?php
 
   $data = $_POST;
 
   $name = $data['name'];
   $email = $data['email'];
   $message = $data['message'];
 
   $dest = isset( $data['dest'] )
      ? $data['dest']
      : 'hello@world-mail.com';
 
   $headers = 'From: '. $name .'<'. $email .'>'. "\r\n";
   $headers .= 'X-Mailer: PHP5'. "\n";
   $headers .= 'MIME-Version: 1.0'. "\n";
   $headers .= 'Content-type: text/html; charset=UTF-8'. "\r\n";
 
   $subject = 'Mensaje de Contacto de '. $name;
 
   $body = '<p>Name: <strong>'. $name .'</strong></p>';
   $body .= '<p>Email: <strong>'. $email .'</strong></p>';
   $body .= '<hr/><p>Message: '. $message .'</p>';
 
   mail($dest, '=?UTF-8?B?'. $subject .'?=', $body, $headers);