<!DOCTYPE html>
<html>
<head>
    <title>Form Builder</title>
    <meta name="csrf-token" content="John Doe">
    <link rel="stylesheet" href="index.css">
    <script type="text/javascript" src="index.js" defer></script>
</head>
<?php
$fields = json_decode('[{"id":757036143956,"name":"heading_757036143956", "type":"heading","label":"Calculations - Work History Form","placeholder":null},{"id":343480892408,"name":"paragraph_343480892408","type":"paragraph","label":"Paragraph","class":"w-full","content":"This work history form is for the purposes of classifying a Early Childhood Teacher employed under the VECTEA.\nPlease note that ELAA does not complete formal work history calculations for Educators.\nThis form must be submitted by the employer or a representative delegated by the employer. If the calculation is for the delegate, please ensure the employer is the contact name.\nThis calculation is performed based on the information that has been provided.\nDisclaimer: Please note this calculation is based on the information provided to ELAA by the service/organisation. In adherence with privacy laws, all calculations completed by ELAA will only be shared with the same service/organisation they came from and will not be forwarded onto any other party.","content_type":"p"},{"id":757643522959,"name":"text_757643522959","type":"text","label":"Input Field","hint":"This is tung do hint","placeholder":"Text","class":"w-full","required":true},{"id":1668008820167,"name":"textarea_1668008820167","type":"textarea","label":"Text Area","hint":null,"placeholder":"Textarea","class":"w-full","required":true},{"id":879887201707,"name":"number_879887201707","type":"number","label":"Number","hint":null,"placeholder":"Number","class":"w-full","required":true},{"id":1219875446696,"name":"datepicker_1219875446696","type":"datepicker","label":"Date Picker","hint":null,"placeholder":"Select date","class":"w-full","required":true},{"id":1639314814206,"name":"checkbox_1639314814206","type":"checkbox","label":"Single Checkbox","hint":"This is my hint text for checkboxes","placeholder":null,"class":"w-full","required":true},{"id":1210131471592,"name":"signature_1210131471592","type":"signature","label":"Signature","placeholder":null,"class":"w-full","required":true},{"id":1168594797637,"name":"file-upload_1168594797637","type":"file-upload","label":"File Upload","class":"w-full","required":true},{"id":992814095305,"name":"select_992814095305","type":"select","label":"Select","options":["Option 1","Option 2","Option 3"],"hint":null,"placeholder":"Select an Option","class":"w-full","required":true},{"id":118835739711,"name":"check-group_118835739711","type":"check-group","label":"Checkbox Group","options":["Option 1","Option 2","Option 3"],"placeholder":null,"class":"w-full","required":true},{"id":1082818372549,"name":"radio-group_1082818372549","type":"radio-group","label":"Radio Button Group","options":["Option 1","Option 2","Option 3","Option 4"],"placeholder":null,"class":"w-full","required":true},{"id":722778613653,"name":"grid_722778613653","type":"grid","label":"Grid","hint":"Input your hint here","grid":[[[{"id":566046152306,"name":"text_566046152306","type":"text","label":"Input Field","hint":null,"placeholder":"Text","class":"w-full","required":true}],[{"id":792178675503,"name":"datepicker_792178675503","type":"datepicker","label":"Date Picker","hint":null,"placeholder":"Select date","class":"w-full","required":true}],[],[{"id":1108808545567,"name":"select_1108808545567","type":"select","label":"Select","options":["Option 1","Option 2","Option 3"],"hint":null,"placeholder":"Select an Option","class":"w-full","required":true}],[]],[[],[{"id":100028376473,"name":"number_100028376473","type":"number","label":"Number","hint":null,"placeholder":"Number","class":"w-full","required":true}],[],[],[]],[[],[],[],[],[]]]}]', true);
// $fields = json_decode('[{"id":722778613653,"name":"grid_722778613653","type":"grid","label":"Grid","hint":"Input your hint here","grid":[[[{"id":566046152306,"name":"text_566046152306","type":"text","label":"Input Field","hint":null,"placeholder":"Text","class":"w-full","required":true}],[{"id":792178675503,"name":"datepicker_792178675503","type":"datepicker","label":"Date Picker","hint":null,"placeholder":"Select date","class":"w-full","required":true}],[],[{"id":1108808545567,"name":"select_1108808545567","type":"select","label":"Select","options":["Option 1","Option 2","Option 3"],"hint":null,"placeholder":"Select an Option","class":"w-full","required":true}],[]],[[],[{"id":100028376473,"name":"number_100028376473","type":"number","label":"Number","hint":null,"placeholder":"Number","class":"w-full","required":true}],[],[],[]],[[],[],[],[],[]]]}]', true);
$fields = json_decode('[{"id":722778613653,"name":"grid_722778613653","type":"grid","label":"(Grid) Qualifications","hint":"Provide exact title in full from ECT qualification certificate","grid":[[[{"id":566046152306,"name":"text_566046152306","type":"text","label":"Qualification","hint":null,"placeholder":"Text","class":"w-full","required":false}],[{"id":1185464523057,"name":"text_1185464523057","type":"text","label":"Tertiary institution","hint":null,"placeholder":"Text","class":"w-full","required":false}],[{"id":758397208370,"name":"number_758397208370","type":"number","label":"Length of course (Equivalent years of full-time study)","hint":null,"placeholder":"Number","class":"w-full","required":false}],[{"id":688347627000,"name":"datepicker_688347627000","type":"datepicker","label":"Date completed (DD/MM/YY)","hint":null,"placeholder":"Select date","class":"w-full","required":false}],[{"id":1107388918284,"name":"text_1107388918284","type":"text","label":"ACECQA Approved (Y/N)","hint":null,"placeholder":"Text","class":"w-full","required":false}]],[[],[],[],[],[]],[[],[],[],[],[]]]}]', true);
$form = [
    'id' => 1,
    'status' => 'published',
    'formatted_published_at' => '27 Mar 2024, 19:23',
    'last_modified' => '27 Mar 2024, 19:23',
    'title' => 'Form Builder Title',
    'success_message' => 'Form Builder Example',
    'fields' => $fields,
];
$form = json_encode($form, JSON_HEX_QUOT | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS);
?>
<body id="form-builder-app">
<form action="#" method="POST">
    <h1 class="text-[30px] p-6">Form Builder Example</h1>
    <form-builder
            name="form_builder"
            form='<?php echo $form; ?>'
            cancel-url="#"
    ></form-builder>
</form>
</body>
</html>

