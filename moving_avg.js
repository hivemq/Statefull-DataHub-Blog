function init(initContext) {
    initContext.addClientConnectionState('temperatureStats',
       { previousValues: [], average: 0 }
    );
 }
 function transform(publish, context) {
   const temperatureState = context.clientConnectionStates['temperatureStats'];
   const temperatureStats = temperatureState.get();
   const N = 6;
   
   temperatureStats.previousValues.unshift(publish.payload.temperature);  // sing unshift() to maintain a FIFO (First-In-First-Out) buffer 
   temperatureStats.previousValues = temperatureStats.previousValues.slice(0, N); // cut short to max  N entries:
   temperatureStats.average = temperatureStats.previousValues.reduce((a, b) => a + b) / temperatureStats.previousValues.length;
   temperatureState.set(temperatureStats); // retain values for next itterartion
   
   publish.payload.previousValues = temperatureStats.previousValues; //defibe the JSON fields
   publish.payload.average = temperatureStats.average;
   const utcTime = new Date().toISOString();
   publish.payload.isotime = utcTime; //"2011-12-19T15:28:46.493Z"
   
   return publish; // and lets serialise
 }