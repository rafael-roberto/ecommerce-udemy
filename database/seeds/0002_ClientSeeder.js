'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')
const Role = use('App/Models/User')

class ClientSeeder {
  async run () {
    const role = await Role.findBy('slug', 'client')
    const Clients = await Factory.model('App/Model/User').createMany(30)
    await Promise.all( clients.map(async client => {
        await client.roles().attach([role.id])
    }))

    const user = await this.user.create ({
      name: 'Thauan',
      surname: 'Santos',
      email: 'thauan@fsocietybrasil.org',
      password: 'secret'
    })
    const adminRole = await Role.findBy('slug', 'admin')
    await user.roles().attach([role.id])
  }
}

module.exports = ClientSeeder
