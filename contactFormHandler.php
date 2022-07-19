<?php
//Working php will add to existing website need to learn php a bit
if (isset($_POST['submit'])) {
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    //Check if inputs are empty
    if (empty($fname) || empty($visitor_email) || empty($message)) {
      header("Location: index.html?contactform=empty");
      exit();
    } else {
        //Check if input characters are valid
        if (!preg_match("/^[a-zA-Z]*$/", $fname) || !preg_match("/^[a-zA-Z]*$/", $lname)) {
         header("Location: index.html?contactform=char"); 
         exit();
         } else {
            if (!filter_var($visitor_email, FILTER_VALIDATE_EMAIL)) {
                header("Location: index.html?contactform=invalidemail");
                exit();
            } else {
                $email_from = 'weskeylearning.com';

                $mailTo = "info@weskeylearning.com";
                $subject = "New Website Tuition Enquiry";
                $email_body ="Name: $fname.\n".
                             "Last Name: $lname.\n".
                             "Email Address: $visitor_email.\n".
                             "User Message: $message\n";
            
                $headers = "From: ".$email_from;
               // $headers .= "Reply-To: $visitor_email \r\n";
            
                mail($mailTo, $subject, $email_body, $headers);
                header("Location: sent.html?mailsend", true, 303);
                exit();
            }
         }
    }


} else {
    header("Location: index.html?contactform=error");
    exit();
}