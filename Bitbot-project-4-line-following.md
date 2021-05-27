# Bitbot-project-4-line-following

## Step 1 Setup the Bitbot
First we will get the "select bitbit modle" block from the "select bitbit modle" tab
and place it in the "on start" block.

```blocks
bitbot.select_model(BBModel.Classic)
```
## Step 2 create the variable's 
Fires we need to create a variable for ecah sensor.
Go to the "variable" tab and create a variable called "right_light_sensor" then create another called "Left_light_sensor"
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
## Step 3 setting the sensors
Next we need to tell each variable where to get their value from.
Go to the 'Bitbot" tab and the "inputs & outputs" tab and select the "left light sensor" and place it in the "0" of the "set to" block from the "variable" tab
Then do the same for the "right light sensor" "set to" block from the "variable" tab

```block
let Left_light_sensor = 0
let right_light_sensor = 0
basic.forever(function () {
    Left_light_sensor = bitbot.readLight(BBLightSensor.Left)
    right_light_sensor = bitbot.readLight(BBLightSensor.Right)
})

```
## Step 4 making decisions
First we need to put in an "if then else" block from the "logic" tab. this goes in the "forever" block under the last block.
Next we will build the logic for the decision. Open the "logic" tab and go to the "boolean" section and select the "and" block.
Place this block in the first "true" section of the "if then else" block.
Then Open the "logic" tab and go to the "comparsion" section and select the "0 = 0" block. and place it in the first section of the "and" block.
place another in the second section of the "and" block.
Next go to the "variable" tab and select the "left_line_sensor" and place it in the first "0" of the "0 = 0" block replace the second "0" with a "1".
 We then get 
  go to the "variable" tab and select the "right_line_sensor" and place it in the first "0" of the "0 = 0" block replace the second "0" with a "1".


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




## all the code
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

