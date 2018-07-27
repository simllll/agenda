'use strict';

/**
 * Build method used to add MongoDB connection details
 * @name Agenda#mongo
 * @function
 * @param {MongoClient} mdb instance of MongoClient to use
 * @param {String} collection name of collection to use. Defaults to `agendaJobs`
 * @param {Object} options options for connecting
 * @param {Function} cb called when MongoDB connection fails or passes
 * @returns {exports} instance of Agenda
 */
module.exports = function(mdb, collection, options, cb) {
  this._mdb = mdb;
  this.db_init(collection, options, cb);
  return this;
};
