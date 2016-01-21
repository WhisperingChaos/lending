#!/usr/bin/env node
/**
 * @module TstFrmwrk
 * @namespace Tst
 */
var TstImpl = require('TstFrmwrkImpl.js')
/**
 * Command Element represents a slice or chunk of a complete command.  Slices/chunks typically represent the elements
 * of a command that change each time you wish to execute a command.  For example the host name and port of an 
 * HTTP Get command are typically the same from one HTTP Get request to the next when communicating to the same server.
 * However, the query portion of the provided url changes to perform different Get requests.
 * 
 * @class CmmdElem
 * @constructor
 * @param {Tst.CmmdElem}  cmmdElem
 */
function CmmdElem ( cmmdElem) {
	this.cmmdElemThunk = cmmdElem
}
/**
 * Specify a list of Assertion Specifications.  Every specification consists of an Assert Expression and a Message to issue when the assertion fails.
 * Assert Expressions are applied when compiling a command for execution to validate the variable values that comprise the command.
 * 
 * @method assertSpec
 * @param {String} assertExpr  js conditional expression encapsulated within a String. 
 * @param {String} message     js expression, that when evaluated, returns a String. Encapsulated within a Sting. 
 * @param {String} [...]       N additional pairs of the above parameters.
 * @chainable
 * @example
 *     cmmdElemHTTP.assertSpec( 'context.hostRestServer.IP_URLaddress != null' ,'Required IP_URLaddress missing.',...)
 */
CmmdElem.prototype.assertSpec = function ( expression, message) {
	this.cmmdElemThunk.assertSpec.apply( this.cmmdElemThunk, arguments)
	return this
}
/**
 * Specify a js expression that resolves to a literal string once its been resolved (compiled) within a given {{#crossLink "Context"}}{{/crossLink}}.
 * 
 * @method compileSpec
 * @param {String} compSpec    js expression containing variables, that when evaluated, returns a String.  Also encapsulated in a Sting. 
 * @chainable
 * @example
 *     cmmdElemHTTP.compileSpec( '\'HTTP://\' + context.hostRestServer.IP_URLaddress + \':\' + context.hostRestServer.port')
 */
CmmdElem.prototype.compileSpec = function ( jsExpr) {
	this.cmmdElemThunk.compileSpec.apply( this.cmmdElemThunk, arguments)
	return this
}
/**
 * A {{#crossLink "Tst.CmmdElem"}}{{/crossLink}} that requires compilation in order to resolve JS expressions containing variables.
 * 
 * @class   Tst.CmmdElemVariable
 * @extends Tst.CmmdElem
 * @constructor
 * 
 */
CmmdElemVariable.prototype = Object.create( CmmdElem.prototype)
CmmdElemVariable.prototype.constructor=CmmdElemVariable
function CmmdElemVariable(){
	CmmdElem.call(this, new TstImpl.CmmdElemVariable())
}
exports.CmmdElemVariable = CmmdElemVariable
/**
 * A {{#crossLink "Tst.CmmdElem"}}{{/crossLink}} that simply returns a static literal expression.
 * Therefore, it doesn't require compilation nor assertion support.
 * 
 * @class   Tst.CmmdElemLiteral
 * @extends Tst.CmmdElem
 * @constructor
 * 
 */
/**
 * Specifying Assertion Specifications will throw an exception as a literal doesn't require assertion checking.
 * 
 * @method assertSpec
 * @private
 */
CmmdElemLiteral.prototype = Object.create( CmmdElem.prototype)
CmmdElemLiteral.prototype.constructor = CmmdElemLiteral
function CmmdElemLiteral ( constLiteral) {
	CmmdElem.call( this, new TstImpl.CmmdElemLiteral( constLiteral))
}
exports.CmmdElemLiteral = CmmdElemLiteral

/**
 * Command compiles one or more Command Elements {{#crossLink "Tst.CmmdElem"}}{{/crossLink}} to produce a complete command.
 * The command is then executed within a {{#crossLink "Context"}}{{/crossLink}}.  
 * Once the command executes, its captured output can be examined by
 * asserts to ensure it emitted the expected values.
 * 
 * @class Cmmd
 * @constructor
 * @param {Tst.Cmmd}  cmmd    
 * 
 */
function Cmmd ( cmmd){
	this.cmmdThunk = cmmd
}
/**
 * Define one or more Assertion Specifications (an Assert Expression and a Message), to verify that the emitted output
 * produced by the Command conforms to the expected output.
 * See: {{#crossLink "TstImpl.Cmmd/assertOutputSpec"}}{{/crossLink}}
 * 
 * @method assertOutputSpec
 * @param {String} assertExpr  JS conditional expression encapsulated within a String. 
 * @param {String} message     JS expression that when evaluated, returns a String. Encapsulated within a Sting. 
 * @param {String} [...]       N additional pairs of the above parameters.
 * @chainable
 * @example
 *     cmmdElemHTTP.assertSpec( 'context.hostRestServer.IP_URLaddress != null' ,'Required IP_URLaddress missing.',...)
 */
Cmmd.prototype.assertOutputSpec = function ( expression, message) {
	return this.cmmdThunk.assertOutputSpec.apply( this.cmmdThunk, arguments)
}
/**
 * Provide the list of Command Elements {{#crossLink "Tst.CmmdElem"}}{{/crossLink}} needed to generate the full
 * command.  The initial Command Element represents the leftmost command fragment while the tailing ones 
 * produce the rightmost Command fragments.
 * See: {{#crossLink "TstImpl.Cmmd/cmmdElemSpec"}}{{/crossLink}}
 * 
 * @method cmmdElemSpec
 * @param  {Tst.CmmdElem} cmmdElem  Leftmost command fragment.
 * @param  {Tst.CmmdElem} [...]     N additional fragments required to produce entire command.
 * @chainable
 *   
 *
 */
Cmmd.prototype.cmmdElemSpec = function( cmmdElem){
	return this.cmmdThunk.cmmdElemSpec.apply( this.cmmdThunk, arguments)
}
/**
 * A {{#crossLink "Tst.Cmmd"}}{{/crossLink}} implementing an HTTP Get operation.  The leftmost Command Element {{#crossLink "Tst.CmmdElem"}}{{/crossLink}}
 * JS expression should provide Host addressability and potentially a port.  Rightmost Command Elements should encode query information understood by the
 * targeted Host.
 * 
 * @class   Tst.CmmdHTTPget
 * @extends Tst.Cmmd
 * @constructor
 * 
 */
CmmdHTTPget.prototype = Object.create( Cmmd.prototype)
CmmdHTTPget.prototype.constructor = CmmdHTTPget
function CmmdHTTPget(){
	Cmmd.call( this, new TstImpl.CmmdHTTPget())	
}
exports.CmmdHTTPget = CmmdHTTPget
/**
 * #### Purpose:
 * Define a Test to perform.  A Test consists of the following:
 * + Name - The name you wish to associate to a Test.  If unspecified, the object's constructor becomes the Test's Name. 
 * + Description - A concise statement describing the Test's purpose.
 * + Command - The operation {{#crossLink "Tst.Cmmd"}}{{/crossLink}} performed by the Test.
 * + Input Context - One or more JS objects containing the data members needed to formulate Commands, as well as the expected values that will be compared to those generated by executing the Command. 
 * + Output Assertion - One or more Assertion Specifications whose expressions can refer to data members appearing in the Input Context and Telemetry produced by the Command.
 * 
 * #### Semantics:
 * + Use inheritance to define one or more derivative Tests from a common/base Test.   
 * + A Test can be independently executed or may depend on the successful execution or failure of one or more prerequisite Tests.
 * Dependent Tests encode their reliance through [Promise](https://github.com/kriskowal/q/blob/v1/README.md) chains to prerequisite Tests.
 * A successful prerequisite Test provides its Telemetry via the fulfilled Promise.
 * 
 * ```
 *       new Test_Version().execute()
 *           .then( function ( telemetry) { 
 *	              return new Test_ServiceList().execute();})
 *            .then( function ( telemetry) { 
 *                return new Test_SubServiceList().execute();})
 * ```
 * 
 * > In the example above, the execution of Test_ServiceList depends on the successful execution of Test_Version,
 * its prerequisite while execution of Test_SubServiceList depends on both Test_Version and Test_ServiceList.
 * Furthermore, although the fulfilled Promise provides Telemetry passed via the variable ```telemetry```,
 * the subsequent Tests do not consume the prior Test's Telemetry.  Essentially, the dependent Tests, simply rely
 * on the successful execution of their prerequisite Tests but not their Telemetry.   
 * 
 * > To define a series of independent Tests simply ignore the returned Promises.
 * ```
 *        new Test_Independent_1.execute()
 *        new Test_Independent_2.execute()
 *        new Test_Independent_3.execute()
 *        ...
 * ```
 * 
 * @class   Tst.Test
 * @constructor
 * 
 */
function Test(){
	this.testThunk = new TstImpl.Test()
	this.name( this.constructor.name)
}
exports.Test = Test
/**
 * The Test's label.
 * See: {{#crossLink "Tst.Test/name"}}{{/crossLink}}
 * 
 * @attribute name
 * @default Value of the Test's ```prototype.constructor```.
 * @required
 * @type String
 *   
 */
/**
 * Specify a Test name.
 * 
 * @method name
 * @chainable
 *   
 */
Test.prototype.name = function ( testName){
	this.testThunk.name = testName
	return this
}
/**
 * The Test's purpose.
 * See: {{#crossLink "Tst.Test/description"}}{{/crossLink}}
 * 
 * @attribute description
 * @required
 * @type String
 *   
 */
/**
 * Specify the Test's purpose.
 * 
 * @method description
 * @chainable
 *   
 */
Test.prototype.description = function ( testDescription){
	this.testThunk.description = testDescription
	return this
}
/**
 * Specify the Command to be executed when running the Test.  
 * See: {{#crossLink "Tst.Cmmd"}}{{/crossLink}}
 * 
 * @method command
 * @chainable
 *   
 */
Test.prototype.command = function ( cmmd){
	this.testThunk.command( cmmd.cmmdThunk)
	return this
}
/**
 * Permits a command to be differentiated by appending an Command Element to the end of the current Command.  
 * See: {{#crossLink "Tst.CmmdElem"}}{{/crossLink}}
 * 
 * @method commandElemAdd
 * @chainable
 *   
 */
Test.prototype.commandElemAdd = function ( cmmdElem){
	var cmmdElemlist=[]
	Array.prototype.forEach.call( arguments, function ( cmmdElem, index){
		cmmdElemlist.push( cmmdElem.cmmdElemThunk )
	})
	this.testThunk.commandElemAdd.apply( this.testThunk, cmmdElemlist)
	return this
}
/**
 * Appends the provided Input Context to the existing chain of Input Contexts defined by the Test. The Input Context chain permits 
 * resolution of variable names defined in Assert Specifications and Command Elements to their associated values.  The chain's sequence
 * determines the search order for variables among the potential set of Input Contexts.  
 * 
 * @method inputContext
 * @chainable
 *   
 */
Test.prototype.inputContext = function ( context) {
	this.testThunk.inputContext.apply( this.testThunk, arguments)
	return this
}
/**
 * Run the Test.
 * See: {{#crossLink "TstImpl.Cmmd/cmmdElemSpec"}}{{/crossLink}}
 * 
 * @method execute
 * @return {Promise}
 *   
 *
 */
Test.prototype.execute = function (){
	return this.testThunk.execute()
}
/**
 * Append the provided Assertion Specifications to the existing list of Output Assertions defined by the Test. The Output Assertion list defines
 * conditionals applied a Command's Telemetry that inspect the Telemetry to ensure it reflects the expected outcome.
 * 
 * @method assertOutputSpec
 * @chainable
 *   
 */
Test.prototype.assertOutputSpec = function ( assertSpec) {
	this.testThunk.assertOutputSpec.apply( this.testThunk, arguments)
	return this
}
