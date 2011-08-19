# Readme

Run bundler to install required gems; you'll also need Pygments

    bundle && easy_install Pygments

## Optimization

The rake tasks contain several tools that will drastically reduce the
page size. HTMLCompressor and YUICompressor was included in the tools
directory, but for optimizing image assets, you will need to install the
*optipng* and *libjpeg* packages from brew.

    brew install libjpeg optipng

## Deployment

     rake deploy


