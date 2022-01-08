<?php
    //不存在当前上传文件则上传
    if(!file_exists($_FILES['inputHead']['name'])) 
    	move_uploaded_file($_FILES['inputHead']['tmp_name'],$_FILES['inputHead']['name']);
?>