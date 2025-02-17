import { EnvIcTokenSchema } from '$env/schema/env-icrc-token.schema';
import { EnvTokenSymbolSchema } from '$env/schema/env-token-common.schema';
import { z } from 'zod';

// TODO, extract the union into it's own schema
export const EnvAdditionalIcrcTokensSchema = z.record(
	EnvTokenSymbolSchema,
	z.union([z.undefined(), EnvIcTokenSchema])
);

export const EnvTokensAdditionalIcrcSchema = z.object({
	production: EnvAdditionalIcrcTokensSchema,
	staging: EnvAdditionalIcrcTokensSchema
});
