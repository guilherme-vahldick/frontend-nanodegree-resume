/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
$('#main').append('Hello Again!');
var awesomeThoughts = "Im AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$('#main').append(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", "Guilherme Vahldick"),
    formattedRole = HTMLheaderRole.replace("%data%", "Web Designer");

$('#header').append(formattedName + formattedRole);