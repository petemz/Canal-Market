const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../Assets', false, /\.(png|jpe?g|svg)$/));

export default images;
