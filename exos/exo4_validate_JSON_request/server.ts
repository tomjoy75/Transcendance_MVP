import fastify from 'fastify';
import { Type } from '@sinclair/typebox';
import { TypeBoxTypeProvider} from '@fastify/type-provider-typebox';

const app = fastify().withTypeProvider<TypeBoxTypeProvider>();

const UserSchema = Type.Object({
    username : Type.String(),
    age : Type.Optional(Type.Number()),
});

app.post('/user', {
    schema: {
        body: UserSchema,
    }
}, async (request, reply) => {
    const{ username, age } = request.body; // Plus besoin d'utiliser as grace a TypeBoxProvider
    return {message: `Utiisateur ${username}, age ${age ?? 'inconnu'} enregistre.`};
 
});

app.listen({port : 8080});