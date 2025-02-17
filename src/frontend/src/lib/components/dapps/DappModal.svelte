<script lang="ts">
	import { Html, Modal } from '@dfinity/gix-components';
	import { nonNullish } from '@dfinity/utils';
	import DappTags from '$lib/components/dapps/DappTags.svelte';
	import IconGitHub from '$lib/components/icons/IconGitHub.svelte';
	import IconOpenChat from '$lib/components/icons/IconOpenChat.svelte';
	import IconTelegram from '$lib/components/icons/IconTelegram.svelte';
	import IconTwitter from '$lib/components/icons/IconTwitter.svelte';
	import ExternalLink from '$lib/components/ui/ExternalLink.svelte';
	import ExternalLinkIcon from '$lib/components/ui/ExternalLinkIcon.svelte';
	import ImgBanner from '$lib/components/ui/ImgBanner.svelte';
	import Logo from '$lib/components/ui/Logo.svelte';
	import { i18n } from '$lib/stores/i18n.store';
	import { modalStore } from '$lib/stores/modal.store';
	import type { OisyDappDescription } from '$lib/types/dapp-description';
	import type { Option } from '$lib/types/utils';
	import { replacePlaceholders } from '$lib/utils/i18n.utils';

	export let dAppDescription: OisyDappDescription;
	$: ({
		website,
		screenshots,
		twitter,
		github,
		tags,
		name: dAppName,
		description,
		logo,
		callToAction,
		telegram,
		openChat
	} = dAppDescription);

	let websiteURL: Option<URL>;
	$: {
		try {
			websiteURL = new URL(website);
		} catch (e) {
			websiteURL = null;
		}
	}
</script>

<Modal on:nnsClose={modalStore.close}>
	<svelte:fragment slot="title">
		<span class="text-center text-xl">{dAppName}</span>
	</svelte:fragment>

	<div class="flex flex-col gap-4">
		{#if nonNullish(screenshots) && screenshots.length > 0}
			<div class="overflow-hidden rounded-3xl">
				<ImgBanner
					styleClass="max-h-64"
					src={screenshots[0]}
					alt={replacePlaceholders($i18n.dapps.alt.website, { $dAppName: dAppName })}
				/>
			</div>
		{/if}

		<article class="py-5">
			<div class="flex flex-wrap items-center justify-start gap-4 border-b border-light-grey pb-5">
				<Logo
					size="md"
					src={logo}
					alt={replacePlaceholders($i18n.dapps.alt.logo, { $dAppName: dAppName })}
				/>
				<div class="mr-auto">
					<div class="text-lg font-bold">{dAppName}</div>
					{#if nonNullish(websiteURL)}
						<ExternalLink
							iconVisible={false}
							ariaLabel={replacePlaceholders($i18n.dapps.text.open_dapp, {
								$dAppName: dAppName
							})}
							href={websiteURL.toString()}
							styleClass="text-sm text-misty-rose">{websiteURL.hostname}</ExternalLink
						>
					{/if}
				</div>
				<div class="flex space-x-3">
					{#if nonNullish(telegram)}
						<ExternalLinkIcon
							href={telegram}
							ariaLabel={replacePlaceholders($i18n.dapps.alt.open_telegram, {
								$dAppName: dAppName
							})}
						>
							<IconTelegram size="22" />
						</ExternalLinkIcon>
					{/if}
					{#if nonNullish(openChat)}
						<ExternalLinkIcon
							href={openChat}
							ariaLabel={replacePlaceholders($i18n.dapps.alt.open_open_chat, {
								$dAppName: dAppName
							})}
						>
							<IconOpenChat size="22" />
						</ExternalLinkIcon>
					{/if}
					{#if nonNullish(twitter)}
						<ExternalLinkIcon
							href={twitter}
							ariaLabel={replacePlaceholders($i18n.dapps.alt.open_twitter, {
								$dAppName: dAppName
							})}
						>
							<IconTwitter size="22" />
						</ExternalLinkIcon>
					{/if}
					{#if nonNullish(github)}
						<ExternalLinkIcon
							href={github}
							ariaLabel={replacePlaceholders($i18n.dapps.alt.source_code_on_github, {
								$dAppName: dAppName
							})}
						>
							<IconGitHub size="22" />
						</ExternalLinkIcon>
					{/if}
				</div>
			</div>

			<p class="m-0 my-5 text-sm [&_ul]:list-disc [&_ul]:pl-6">
				<Html text={description} />
			</p>
			<DappTags {dAppName} {tags} />
		</article>
	</div>

	{#if nonNullish(websiteURL)}
		<ExternalLink
			ariaLabel={replacePlaceholders($i18n.dapps.alt.open_dapp, {
				$dAppName: dAppName
			})}
			styleClass="as-button primary padding-sm mt-auto flex flex-row-reverse"
			href={websiteURL.toString()}
			>{callToAction ??
				replacePlaceholders($i18n.dapps.text.open_dapp, {
					$dAppName: dAppName
				})}</ExternalLink
		>
	{/if}
</Modal>

<style lang="scss">
	@use '../../styles/mixins/modal';

	article {
		@include modal.content;

		padding: var(--padding-3x) var(--padding-2_5x);
		margin: 0 0 var(--padding-3x);
	}
</style>
