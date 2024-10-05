class Command {
    execute() {}
}

class TurnOnLight extends Command {
    execute() {
        console.log("Turning on the light");
    }
}

class LightSwitch {
    executeCommand(command) {
        command.execute();
    }
}
