# Bitbot-project-4-line-following

## Step 1 
Setup the Bitbot

First we will get the "select bitbit modle" block from the "select bitbit modle" tab
and place it in the "on start" block.

```blocks
bitbot.select_model(BBModel.Classic)
```
## Step 2 
Create the variable's 

Fires we need to create a variable for ecah sensor.
Go to the "variable" tab and create a variable called "right_light_sensor" then create another called "Left_light_sensor".
Then select the "set to" block from the "variable" tab amd plce it in the "forever" block.
Do this again but this time use the dropdown tab to change to the "Left_light_sensor"

```block
let right_light_sensor = 0
let Left_light_sensor = 0
basic.forever(function () {
    Left_light_sensor = 0
    right_light_sensor = 0
})
```
## Step 3 
Setting the sensors

Next we need to tell each variable where to get their value from.
Go to the 'Bitbot" tab and the "inputs & outputs" tab and select the "left light sensor" and place it in the "0" of the "set to" block from the "variable" tab.
Then do the same for the "right light sensor" "set to" block from the "variable" tab

```block
let Left_light_sensor = 0
let right_light_sensor = 0
basic.forever(function () {
    Left_light_sensor = bitbot.readLight(BBLightSensor.Left)
    right_light_sensor = bitbot.readLight(BBLightSensor.Right)
})

```
## Step 4 
Making decisions

First we need to put in an "if then else" block from the "logic" tab. this goes in the "forever" block under the last block.

```block
let left_line_sensor = 0
let Right_line_sensor = 0
basic.forever(function () {
    left_line_sensor = bitbot.readLine(BBLineSensor.Left)
    Right_line_sensor = bitbot.readLine(BBLineSensor.Right)
    if (true) {
        
    } else if (true) {
        
    }
})
```
## Step 5 
Continue making decisions

This is a complicated step so take your time and check the example if you need.
We will start building the logic for the decision. Open the "logic" tab and go to the "boolean" section and select the "and" block.
Place the "and" block on the work space so we can build the entire block before placing it in the code.
Then Open the "logic" tab and go to the "comparsion" section and select the "0 = 0" block and place it in the first section of the "and" block.
Place another in the second section of the "and" block.
Next go to the "variable" tab and select the "left_line_sensor" and place it in the first "0" of the first "0 = 0" block replace the second "0" with a "1".
Then go to the "variable" tab and select the "right_line_sensor" and place it in the first "0" of the second "0 = 0" block.
Place this combined block in the first "true" section of the "if then else" block.

```block
let left_line_sensor = 0
let Right_line_sensor = 0
basic.forever(function () {
    left_line_sensor = bitbot.readLine(BBLineSensor.Left)
    Right_line_sensor = bitbot.readLine(BBLineSensor.Right)
    if (left_line_sensor == 1 && Right_line_sensor == 0) {
        
    } else if (true) {
        
    }
})
```

## Step 6 
Continue making decisions

In this step need to do almost the same as the last setp so we are going to copy the combined block that we placed in the first "true" section of the "if then else" block.
Place your curser the the middle of the "if and "then" section of the "if then" block. You should see the block you droped iin highlited.
Make sure the entire block is highlited not just part of it.
Right click and select "duplicate".
We now need to change the numbers in the block to read "left_line_sensor=0 and right_light_sensor=1".
Move the newly created block and replacrthe "true" in the "else if" section of the "if then else" block

```block
let left_line_sensor = 0
let Right_line_sensor = 0
basic.forever(function () {
    left_line_sensor = bitbot.readLine(BBLineSensor.Left)
    Right_line_sensor = bitbot.readLine(BBLineSensor.Right)
    if (left_line_sensor == 1 && Right_line_sensor == 0) {
        
    } else if (left_line_sensor == 0 && Right_line_sensor == 1) {
        
    }
})
```

## Step 7 
Motor Controll 

Start by going to the "bitbot" then "motors" tab and find the "spin at speed %" block and place 4 of them in the workspace.
Set 2 using the dropdown tab to "left" and 2 of then to "right".
For the Left motors set one to 60% and one to 30% and do the same for the right motors.
Now we need to combine them into the code.
Join Left 30% and right 60% together and place them under the "if then section of the "if then else" block.
Join Left 60% and right 30% together and place them under the "else if" section of the "if then else" block.

```block
let left_line_sensor = 0
let Right_line_sensor = 0
basic.forever(function () {
    left_line_sensor = bitbot.readLine(BBLineSensor.Left)
    Right_line_sensor = bitbot.readLine(BBLineSensor.Right)
    if (left_line_sensor == 1 && Right_line_sensor == 0) {
        bitbot.rotate(BBRobotDirection.Left, 30)
        bitbot.rotate(BBRobotDirection.Right, 60)
    } else if (left_line_sensor == 0 && Right_line_sensor == 1) {
        bitbot.rotate(BBRobotDirection.Left, 60)
        bitbot.rotate(BBRobotDirection.Right, 30)
    }
})
```

## Step 8 
Download

You should now have a working code to download to the bitbot.

```block 
let Right_line_sensor = 0
let left_line_sensor = 0
bitbot.select_model(BBModel.Auto)
basic.forever(function () {
    left_line_sensor = bitbot.readLine(BBLineSensor.Left)
    Right_line_sensor = bitbot.readLine(BBLineSensor.Right)
    if (left_line_sensor == 1 && Right_line_sensor == 0) {
        bitbot.rotate(BBRobotDirection.Left, 30)
        bitbot.rotate(BBRobotDirection.Right, 60)
    } else if (left_line_sensor == 0 && Right_line_sensor == 1) {
        bitbot.rotate(BBRobotDirection.Left, 60)
        bitbot.rotate(BBRobotDirection.Right, 30)
    }
})
```


