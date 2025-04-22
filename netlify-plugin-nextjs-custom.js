module.exports = {
  onPostBuild: async ({ constants, utils }) => {
    const { run } = utils.run;
    
    // Copy CSS files to ensure they're accessible
    await run('mkdir -p .next/static/css', { cwd: constants.PUBLISH_DIR });
    await run('find .next/static -name "*.css" -exec cp {} .next/static/css/ \\;', { cwd: constants.PUBLISH_DIR });
    
    console.log('Successfully copied CSS files to ensure they are accessible');
  }
} 