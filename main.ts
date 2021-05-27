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
