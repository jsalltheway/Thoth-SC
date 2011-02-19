// ==========================================================================
// Project:   ThothSC
// Copyright: ©2010 Maurits Lamers
// ==========================================================================
/*globals ThothSC */

/** @namespace

  A framework to connect to the Thoth server application
  
  @extends SC.Object
*/
ThothSC = SC.Object.create(
  /** @scope Thoth.prototype */ {

  NAMESPACE: 'ThothSC',
  VERSION: '0.1.0',
  
  store: null,
  
}) ;