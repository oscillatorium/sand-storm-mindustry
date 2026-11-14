Events.on(Trigger.update, () => {
    // 1. Получаем текущую погоду
    let currentWeather = Vars.state.weather.weather;
    
    // 2. Проверяем, что это сыншторм
    let isSandstorm = currentWeather != null && currentWeather.name == "sandstorm";

    // 3. Проходим по всем тапкам на карте
    Groups.build.each(build => {
        // 4. берём тапки с определённым именем
        if (build.block.name == "sand-stormv2-sandstorm-generator") {
            
            // 5. Включаем, если буря есть, и выключаем, если её нет
            if (isSandstorm && !build.enabled) {
                build.enabled = true;
            } else if (!isSandstorm && build.enabled) {
                build.enabled = false;
            }
            
        }
    });
});
