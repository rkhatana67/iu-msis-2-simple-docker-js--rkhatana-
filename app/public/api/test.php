<?php

$num= 2;
$foo = $num. " be";
$bar = "or not to be";

echo $foo ." ". $bar ."\n";
echo $num * $num * $num;


// this is a comment
# this is also a comment
/* this is a
multi-line comment
*/


if (true) {
    echo "TRUE \n";
} else {
    echo "FALSE \n";
}

$arr= [1,1,2,3,5,8];

$arr2= [
    "first"  => "Tom",
    "second" => "Bipin",
    "best"   => "DS"
];

function printList($someArr) {
    echo "<ul>\n";
    foreach($someArr as $key => $val) {
        echo "<li>".$key." is ".$val."</li>\n";
    }
    echo "</ul>\n"; 
}

printList($arr);
printList($arr2);

echo json_encode(
    $arr2,
    JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
);

