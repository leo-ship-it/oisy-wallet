import { modalStore } from '$lib/stores/modal.store';
import { derived, type Readable } from 'svelte/store';

export const modalEthReceive: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'eth-receive'
);
export const modalIcpReceive: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'icp-receive'
);
export const modalIcrcReceive: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'icrc-receive'
);
export const modalCkBTCReceive: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'ckbtc-receive'
);
export const modalCkETHReceive: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'cketh-receive'
);
export const modalBtcReceive: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'btc-receive'
);
export const modalReceive: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'receive'
);
export const modalSend: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'send'
);
export const modalBuy: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'buy'
);
export const modalConvertCkBTCToBTC: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'convert-ckbtc-btc'
);
export const modalConvertBTCToCkBTC: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'convert-btc-ckbtc'
);
export const modalConvertToTwinTokenCkEth: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'convert-to-twin-token-cketh'
);
export const modalConvertToTwinTokenEth: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'convert-to-twin-token-eth'
);
export const modalHowToConvertToTwinTokenEth: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'how-to-convert-to-twin-token-eth'
);
export const modalWalletConnectAuth: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'wallet-connect-auth'
);
export const modalWalletConnectSign: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'wallet-connect-sign'
);
export const modalWalletConnectSend: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'wallet-connect-send'
);
export const modalEthTransaction: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'eth-transaction'
);
export const modalIcTransaction: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'ic-transaction'
);
export const modalManageTokens: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'manage-tokens'
);
export const modalHideToken: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'hide-token'
);
export const modalIcHideToken: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'ic-hide-token'
);
export const modalBtcTransaction: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'btc-transaction'
);
export const modalToken: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'token'
);
export const modalIcToken: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'ic-token'
);
export const modalReceiveBitcoin: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'receive-bitcoin'
);
export const modalAboutWhyOisy: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'about-why-oisy'
);
export const modalDAppDetails: Readable<boolean> = derived(
	modalStore,
	($modalStore) => $modalStore?.type === 'dapp-details'
);

export const modalWalletConnect: Readable<boolean> = derived(
	[modalWalletConnectAuth, modalWalletConnectSign, modalWalletConnectSend],
	([$modalWalletConnectAuth, $modalWalletConnectSign, $modalWalletConnectSend]) =>
		$modalWalletConnectAuth || $modalWalletConnectSign || $modalWalletConnectSend
);
