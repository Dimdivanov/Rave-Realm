export const validateArtistCreateForm = (values) => {
    const { artistName, imageUrl, biography, appearanceDate, stage } = values;

    // Check if artist name is provided
    if (!artistName.trim()) {
        return 'Artist Name is required!';
    }

    // Check if image URL is a valid URL
    try {
        new URL(imageUrl);
    } catch (_) {
        return 'Invalid Artist Image URL!';
    }

    // Check if biography is provided
    if (!biography.trim()) {
        return 'Biography is required!';
    }

    // Check if appearance date is a valid date in the format dd-mm-yy
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{2})$/;
    if (!datePattern.test(appearanceDate)) {
        return 'Performance Date must be in the format dd-mm-yy!';
    }

    // Check if stage is provided
    if (!stage.trim()) {
        return 'Stage is required!';
    }

    return '';
};
