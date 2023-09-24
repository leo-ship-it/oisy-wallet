import type { ActorMethod } from '@dfinity/agent';
import type { Principal } from '@dfinity/principal';

export type Arg = { Upgrade: null } | { Init: InitArg };
export type CanisterError =
	| { NoChildrenForCode: null }
	| { CannotRegisterMultipleTimes: null }
	| { NoTokensLeft: null }
	| { CanisterKilled: null }
	| { GeneralError: string }
	| { UnknownOisyWalletAddress: null }
	| { NoMoreCodes: null }
	| { MaximumDepthReached: null }
	| { CodeAlreadyRedeemed: null }
	| { TransactionUnkown: null }
	| { CodeNotFound: null }
	| { DuplicateKey: string }
	| { NoCodeForII: null }
	| { ManagersCannotParticipateInTheAirdrop: null };
export interface CodeInfo {
	codes_generated: bigint;
	code: string;
	codes_redeemed: bigint;
}
export interface Info {
	principal: Principal;
	code: string;
	ethereum_address: string;
	children: [] | [Array<[string, boolean]>];
	tokens_transferred: boolean;
}
export interface InitArg {
	backend_canister_id: Principal;
	token_per_person: bigint;
	maximum_depth: bigint;
	total_tokens: bigint;
	numbers_of_children: bigint;
}
export type Result = { Ok: null } | { Err: CanisterError };
export type Result_1 = { Ok: CodeInfo } | { Err: CanisterError };
export type Result_2 = { Ok: Array<[bigint, string, bigint]> } | { Err: CanisterError };
export type Result_3 = { Ok: Info } | { Err: CanisterError };
export interface _SERVICE {
	add_admin: ActorMethod<[Principal], Result>;
	add_codes: ActorMethod<[Array<string>], Result>;
	add_manager: ActorMethod<[Principal], Result>;
	bring_caninster_back_to_life: ActorMethod<[], Result>;
	clean_up: ActorMethod<[], Result>;
	generate_code: ActorMethod<[], Result_1>;
	get_airdrop: ActorMethod<[bigint], Result_2>;
	get_code: ActorMethod<[], Result_3>;
	is_manager: ActorMethod<[], boolean>;
	kill_canister: ActorMethod<[], Result>;
	put_airdrop: ActorMethod<[BigUint64Array | bigint[]], Result>;
	redeem_code: ActorMethod<[string], Result_3>;
	remove_admins: ActorMethod<[Array<Principal>], Result>;
	remove_managers: ActorMethod<[Array<Principal>], Result>;
}
