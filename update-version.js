import fs from 'fs';
import yaml from 'js-yaml';

function updateConfigYaml({ ver, build }) {
    const fileContents = fs.readFileSync('./config.yaml', 'utf8');
    const data = yaml.load(fileContents);

    data.platforms.android.versionName = ver;
    data.platforms.ios.versionName = ver;

    data.platforms.android.versionCode = build;
    data.platforms.ios.buildNumber = build;

    const yamlStr = yaml.dump(data);

    fs.writeFileSync('./config.yaml', yamlStr, 'utf8');
}

function updatePackage({ ver }) {
    const data = fs.readFileSync('./package.json', 'utf8');
    const jsonObject = JSON.parse(data);

    jsonObject.version = ver;

    const updatedJSONString = JSON.stringify(jsonObject, null, 2);

    fs.writeFileSync('./package.json', updatedJSONString, 'utf8');
}

function updateVersion({ ver, build }) {
    updateConfigYaml({
        ver,
        build,
    });

    updatePackage({
        ver,
    });
}

updateVersion({
    ver: '0.15.0',
    build: 17,
});
