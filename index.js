const core = require('@actions/core');
const github = require('@actions/github');

try {
  
  const nameToGreet = core.getInput('Destino-saludo');
  console.log(`Hola ${nameToGreet}!`);
  const fecha = (new Date()).toTimeString();
  core.setOutput("Fecha", fecha);
  
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`Cuerpo del evento: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
