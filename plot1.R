##Read in data
pm25_sum <- readRDS("summarySCC_PM25.rds")
pm25_srccls <- readRDS("Source_Classification_Code.rds")

##total up emmissions by year
pm25_yearly <- aggregate(Emissions ~ year, pm25_sum, sum)

##plot emission trends between 1999-2008
plot(pm25_yearly$year, pm25_yearly$Emissions, xlab = "year", ylab = "PM2.5 Emissions", main = "PM2.5 Emissions Between 1999-2008", type = "l")